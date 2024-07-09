import {CDN_URL} from "../utils/constants";
const MenuItem = (props) => {
  const { info } = props;
  return (
    <div>
      <div>
        <span style={{ fontWeight: "bold" }}>{info.name}</span>
        <br />
        <div style={{paddingBottom: 1}}>
          Rs. {info.price / 100 || info.defaultPrice / 100}
        </div>
        <br />
        <span>{info.description}</span>
      </div>
      {info.imageId !== undefined && (
      <div>
        <img src = {CDN_URL + info.imageId}/>
      </div>
      )}
      <hr style={{marginTop: 30}}></hr>
    </div>
  );
};

export default MenuItem;
