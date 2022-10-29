import react from "react";

let List = ({ peo }) => {
  return (
    <>
      {peo.map((x) => {
        const { name, image } = x;
        return (
          <div id="person-id">
            <img src={image} />
            <h4> {name} </h4>
          </div>
        );
      })}
    </>
  );
};
export { List };
