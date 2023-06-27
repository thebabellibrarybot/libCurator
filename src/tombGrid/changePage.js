import SVG from "../useHooks/useSVG";

const ChangePage = ({ changePage, curPage, maxPage }) => {

    return (
      <div className="grid-footer main-flbx">
        <div onClick={() => changePage(curPage ? -1 : 1)}>
            <SVG ability = 'left'></SVG>
        </div>
        {curPage ? `Page: ${curPage}/${maxPage}` : 
        <div className="switch"> 
            <div className={`circle ${maxPage ? 'circle-active':'circle-inactive'}`} ></div>
            <div className={`circle ${!maxPage ? 'circle-active':'circle-inactive'}`} ></div>
        </div>}
        <div onClick={() => changePage(curPage ? 1 : -1)}>
            <SVG ability = 'right'></SVG>
        </div>
      </div>
    );
  };
export default ChangePage;