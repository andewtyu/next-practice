export default (req: { method: string; }, res: { setHeader: (arg0: string, arg1: string) => void; statusCode: number; json: (arg0: { message: string; }) => void; }) => {
  // res.statusCode = 200;
  // res.json({ name: null });
  if (req.method === "POST") {
    res.setHeader("Set-Cookie", "a_name=Mike;Max-Age=3600;HttpOnly,Secure");
    res.statusCode = 200;
    res.json({ message: "ok" });
  }
};