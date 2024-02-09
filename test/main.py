from prometheus_client import start_http_server, Gauge
import time

pod_health = Gauge('pod_health', 'The health metrics of the pod', ['pod'])

if __name__ == '__main__':
  start_http_server(8000)
  pod_health.labels('a').set(1)
  pod_health.labels('b').set(1)
  pod_health.labels('c').set(0)
  while True:
    time.sleep(1)