import { ClipLoader } from "react-spinners";

 export default function Loader() {
  console.log("loader component import successfully");
  return (
        <div
      style={{
        display: "flex",
        justifyContent: "center", // horizontal center
        alignItems: "center",     // vertical center (optional)
        height: "60vh",           // adjust as needed
        width: "100%",
      }}
    >
  <ClipLoader color="#36d7b7" size={50} />
</div>
  )
}
