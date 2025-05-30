import mongoose from "mongoose";

let status: "non connecting"|"connected" = "non connecting";

const connect = (url: string, callback: (...data: unknown[]) => void = () => { console.log("Connected to MongoDB") }) => {
  mongoose.connect(url)
    .then((a) => {
      status = "connected";
      callback(a);
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export { connect, status };

export default connect;
