import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    iftar: string,
    location: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    var resp : Response = await fetch("https://iftarvakti.emsile.com/almanya/berlin-icin-iftar-aksam-namazi-saati.html")
    var jsonData : string = await resp.text()
    
    // split jsonData @ <big>
    var jsonDataArray = jsonData.split("<big><big>")

    // split jsonData @ </big>
    var jsonDataArray2 = jsonDataArray[1].split("</big>")

    res.status(200).json({ iftar: jsonDataArray2[0], location: "Berlin" })
}
