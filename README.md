# Grafana Stat Panel

The grafana stat panel does not allow us to have a link for each
statistic. For that we have to come up with a workaround. We 
download the panel from the grafana github repository and 
modify it to include a link for each statistic. We then 
use it as a custom plugin in grafana.

The link for each statistic is based on the value of the 
statistic, with a custom prefix. For example, if the value
of the statistic is 'pod1', the link will be 
`http://localhost:8080/pod1`. On the other hand, we 
can set forwarding rules on the server to redirect
the link to the desired location.


```bash
npm install
npm run build
docker compose up
```
