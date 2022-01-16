export default (req: { cookies: { a_name: any; }; }, res: { statusCode: number; json: (arg0: { name: any; }) => void; }) => {
  res.statusCode = 200;
  res.json({ name: req.cookies.a_name });
};