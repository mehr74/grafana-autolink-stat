
import {
  reduceField,
  DataFrame,
  ReducerID,
  FieldType,
  NumericRange,
}  from '@grafana/data';

export function findNumericFieldMinMax(data: DataFrame[]): NumericRange {
  let min: number | null = null;
  let max: number | null = null;

  const reducers = [ReducerID.min, ReducerID.max];

  for (const frame of data) {
    for (const field of frame.fields) {
      if (field.type === FieldType.number) {
        const stats = reduceField({ field, reducers });
        const statsMin = stats[ReducerID.min];
        const statsMax = stats[ReducerID.max];

        if (min === null || statsMin < min) {
          min = statsMin;
        }

        if (max === null || statsMax > max) {
          max = statsMax;
        }
      }
    }
  }

  return { min, max, delta: (max ?? 0) - (min ?? 0) };
}
