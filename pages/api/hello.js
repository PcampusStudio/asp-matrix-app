// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const apps = {
    owner : "asp-matrix.com",
    description : "RESTful Web Services with Node.js and Express",
    version : "1.0",
    created : "2022-4-14"
  }
  res.status(200).json(apps)
}
