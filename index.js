//by TGM043 (Discord)/ironmaiden1872 (Nexus Mods)
import cleaned from './BakaStrings.json' assert {type: 'json'}
const download = (filename, text) => {
	var pom = document.createElement('a')
	pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text))
	pom.setAttribute('download', filename)
	pom.click()
	pom.remove()
}
const cleanJson = (old) => {
    result = { string: {} }
    for (let t in old.string){
        result.string[t] = old.string[t]
    }
    for (let t in cleaned.string){
        result.string[t] = cleaned.string[t]
    }
	return result
}
let toSave = null;
document.getElementById('file').addEventListener('input', async (e)=>{
	try {
		toSave = JSON.parse(await e.target.files[0].text())
	} catch {}
})
document.getElementById('saver').addEventListener('click', async (e)=>{
	try {
		toSave = cleanJson(toSave)
		if (!toSave) throw new Error()
		download("BakaStrings.json", JSON.stringify(toSave, null, '\t'))
		e.target.innerHTML = 'success'
	} catch {
		e.target.innerHTML = 'failed'
		return
	}
})