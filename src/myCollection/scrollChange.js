// variant of changePage.js
import SVG from "../useHooks/useSVG";

const ScrollChange = ({changePage, maxPage, curPage}) => {



    return (
        <div className="switch-vert sidebar">
          <div onClick={() => changePage(curPage ? -1 : 1)}>
              <SVG ability = 'left'></SVG>
          </div>

          <div className="switch-vert"> 
              <div className={`circle ${maxPage ? 'circle-active':'circle-inactive'}`} onClick={() => changePage()}>pos</div>
              <div className={`circle ${!maxPage ? 'circle-active':'circle-inactive'}`} onClick={() => changePage()}>neg</div>
          </div>

          <div onClick={() => changePage(curPage ? 1 : -1)}>
              <SVG ability = 'right'></SVG>
          </div>
        </div>
      );
    };
export default ScrollChange;