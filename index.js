import { exec } from 'child_process'


class DockerStats {
    async run() {
        return new Promise((res, rej) => {
            try {
                exec("docker stats --no-stream", (err, stdout, stderr) => {
                    if (err) rej(err);
                    if (stderr) console.log(stderr)
                    let data = stdout
                    let lines = data.split("\n");
                    lines.shift()

                    if (lines.length <= 0) {
                        rej('no container runner')
                    }
                    if (lines[lines.length - 1] == "") {
                        lines.pop()
                    }
                    let containers = []
                    lines.forEach(line => {
                        let data = line.split("   ").filter(e => e != "")

                        let [cid, cname, cpuUsage, ramUsage, memUsage, netIO, diskIo, pId] = data
                        let [use,limit]=ramUsage.split("/")
                        use=use.trim()
                        limit=limit.trim()
                        ramUsage={use,limit}
                        let [recieve,send]=netIO.split("/")
                        recieve=recieve.trim()
                        send=send.trim()
                        netIO={recieve,send}
                        let [read,write]=diskIo.split('/')
                        read=read.trim()
                        write=write.trim()
                        diskIo={
                            read,write
                        }
                        containers.push({ cid, cname, cpuUsage, ramUsage, memUsage, netIO, diskIo, pId })

                    })
                    return res(containers)
                })
            } catch (err) {
                rej(`err is ${err}`)
            }
        })

    }
}



export default DockerStats