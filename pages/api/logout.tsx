export default (req: any, res: { setHeader: (arg0: string, arg1: string) => void; statusCode: number; json: (arg0: { message: string; }) => void; }) => {
  res.setHeader("Set-Cookie", "a_name=Mike;Max-Age=0;HttpOnly,Secure");
  res.statusCode = 200;
  res.json({ message: "ok" });
};