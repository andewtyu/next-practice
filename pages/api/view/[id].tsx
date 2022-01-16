export default (req: { query: { id: any; }; }, res: { statusCode: number; json: (arg0: { id: any; }) => void; }) => {
  res.statusCode = 200;
  res.json({ id: req.query.id });
};