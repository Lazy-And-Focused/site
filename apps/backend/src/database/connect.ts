import mongoose from "mongoose";

let status: "non connecting"|"connected" = "non connecting";

const connect = (url: string, callback: (...data: unknown[]) => void = () => { console.log("Connected to MongoDB") }) => {
  console.log("Trying to connect to MongoDB...");
  mongoose.connect(url)
    .then((m) => {
      status = "connected";
      callback(m);
    })
    .catch((error) => {
      throw new Error(error);
    })
    .finally(() => {
      console.log("End trying...");
    });
};

export { connect, status };

export default connect;
