/* app imports */
import getJBIcons from "@common/data/get-jb-icons";

/* component */
function SimpleRowSpanLayout(): JSX.Element {
  const IMG_ROOT = import.meta.env.VITE_IMG_SRC;
  const brandsData = getJBIcons().splice(0, 5);
  return (
    <>
      <div className="container simpleRowSpanLayout">
        <ul className="list-unstyled">
          {
            brandsData.map((obj, index) => {
              return (
                <li key={index} className="brandItem text-center positionRelative">
                  <div className="image positionRelative">
                    <img src={`${IMG_ROOT}${obj.src}`}
                    className="img-fluid" alt={obj.alt} title={obj.title}/>
                  </div>
                    <span>{obj.title}</span>
                </li>
              );
            })
          }
        </ul>
        <p className="info text-center">
          <b>Item 2</b> spans across two rows using <b>grid-row: span 2</b>, occupying twice the height of a single grid cell.
          The rest of the items occupy their default single cell within the grid.
        </p>
      </div>
    </>
  );
}

/* exports */
export default SimpleRowSpanLayout;
