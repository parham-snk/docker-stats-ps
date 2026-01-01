# docker-stats-ps
<p>this package outputing an array of your  running containeres in your system by docker</p>
 
```JS
//output
[
  {
    cid: '7705bc70fb40',
    cname: 'nd2',
    cpuUsage: ' 0.00%',
    ramUsage: { use: '51.36MiB', limit: '7.635GiB' },
    memUsage: '0.66%',
    netIO: { recieve: '2.11kB', send: '611B' },
    diskIo: { read: '0B', write: '0B' },
    pId: '  22'
  },
  {
    cid: '2bd928af86d6',
    cname: 'nd',
    cpuUsage: '  0.00%',
    ramUsage: { use: '45.61MiB', limit: '7.635GiB' },
    memUsage: '0.58%',
    netIO: { recieve: '2.05kB', send: '493B' },
    diskIo: { read: '0B', write: '0B' },
    pId: '  18'
  }
]
```

### how to install  

```
npm i --save docker-stats-ps
```

### how to use

```JS
import DS from "docker-stats-ps"

let dockerStats=new DS().run()

dockerStats
.then(data=>{
    
})
.catch(err=>{

})
```
