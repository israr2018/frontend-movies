import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import { CloudUploadOutlined, InfoCircleOutlined } from "@ant-design/icons";
export default function UploadFile(props) {
  const getUploadParams = ({ meta }) => {
    const url = "https://httpbin.org/post";
    return {
      url,
      meta: { fileUrl: `${url}/${encodeURIComponent(meta.name)}` },
    };
  };

  const handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta);
  };

  const handleSubmit = (files, allFiles) => {
    console.log(files.map((f) => f.meta));
    allFiles.forEach((f) => f.remove());
  };

  return (
    <>
      <Dropzone
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        onSubmit={handleSubmit}
        accept={props.format}
        maxFiles={1}
        multiple={false}
        inputContent={(files, extra) =>
          extra.reject ? (
            props.rejectText
          ) : (
            <span className="upload-text">
              <CloudUploadOutlined className="icon-holder" />
              Click or drag file to this area to upload
            </span>
          )
        }
        styles={{
          dropzoneReject: { borderColor: "red", backgroundColor: "#DAA" },
          inputLabel: (files, extra) => (extra.reject ? { color: "red" } : {}),
        }}
      />
      <span className="upload-info">
        <InfoCircleOutlined className="icon-holder" />
        {props.infoText}
      </span>
    </>
  );
}
