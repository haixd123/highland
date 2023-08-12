import "../../style.scss";

const SeeMore = () => {
  return (
    <div
      className="seeMoreContent"
      // style={{ margin: '20px 0', boxSizing: 'border-box', textAlign: 'center'}}
    >
      <a
        href="#"
        className="seeMoreLink"
        // style={{
        //     backgroundColor: 'transparent',
        //     color: '#b22830',
        //     borderColor: '#b22830',
        //     fontSize: '16px',
        //     lineHeight: '24px ',
        //     border: 'solid 1px #b22830',
        //     textTransform: 'uppercase',
        //     padding: '7px 63px',
        //     borderRadius: '5px'}}
      >
        Xem thêm
      </a>
    </div>
  );
};

export default SeeMore;
