import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiTimeFive } from "react-icons/bi";
import { format } from "date-fns"; 
export const NewsDetailContent = ({ news }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    axios
      .get("https://64c7a247a1fe0128fbd50e91.mockapi.io/comments")
      .then((response) => {
        const commentsData = response.data; // Assuming the API response contains an array of comments
        setComments(commentsData); // Update the comments state with the fetched comments
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  }, []);

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      const newCommentObj = { name: "User", body: newComment };

      // Save the new comment to the API
      axios
        .post(
          "https://64c7a247a1fe0128fbd50e91.mockapi.io/comments",
          newCommentObj
        )
        .then((response) => {
          // Update the comments state with the new comment from the API response
          setComments([...comments, response.data]);
          setNewComment(""); // Clear the newComment state
        })
        .catch((error) => {
          console.error("Error adding comment:", error);
        });
    }
  };
  return (
    <div className="container">
      <div className="news-wrapper">
        <div className="news-content">
          <div className="content-title">{news}</div>
          <div className="news-icon">
            {" "}
            <BiTimeFive /> <div className="news-time">04-08-2023</div>
          </div>
          <div className="content-news">
            TeinTop là thương hiệu đồng hồ nam tầm trung được yêu thích tại Việt
            Nam. Với chất lượng bền bỉ, thiết kế đa dạng và mức giá bình dân,
            các mẫu đồng hồ nam TeinTop ngày càng được đông đảo khách hàng tin
            dùng.{" "}
          </div>
          <div className="content-news">
            Tại Việt Nam, Thương hiệu đồng hồ Teintop đang được phân phối chính
            thức tại Thành Hưng Watch - Số 1 Về Đồng Hồ Chính Hãng.Thương hiệu
            đồng hồ TeinTop ra đời từ năm 1986 tại Miami, Hoa Kỳ. Với lịch sử
            gần 40 năm hình thành và phát triển, TeinTop đã chứng minh được chất
            lượng bền bỉ cùng tinh thần thời trang của mình được thể hiện rõ
            ràng trong những kiệt tác đồng hồ nổi tiếng.
          </div>
          <div className="content-news">
            Với xuất xứ từ USA nơi có nền công nghiệp phát triển bậc nhất thế
            giới hiện nay, các mẫu đồng hồ TeinTop luôn khiến cho người dùng hài
            lòng bởi sự hiện đại và đa dạng trong các tính năng. Sự kết hợp hài
            hoà giữa giá trị cốt lõi truyền thống và cải tiến mẫu mã chính là
            đặc trưng khiến cho các sản phẩm đồng hồ TeinTop có được ưu thế cạnh
            tranh so với các dòng đồng hồ khác trên thị trường.
          </div>
          <div className="contentnews-image">
            <img
              src="https://thanhhungwatch.vn/uploads/t8660-7_(8).jpg"
              alt="hh"
            ></img>
            <div className="image-captions">
              Teintop là thương hiệu đồng hồ nam được yêu thích tại Việt Nam
            </div>
          </div>
          <div className="content-news">
            Những mẫu đồng hồ nam có thiết kế sang trọng luôn chiếm được cảm
            tình của những quý ông thành đạt. Với sự kết hợp ấn tượng bởi các
            gam màu ấn tượng như vàng-bạc-xanh, chúng giúp cho người đeo thể
            hiện được sự quyền uy và khả năng lãnh đạo của mình. Bên cạnh đó,
            chi tiết đính đá trên các cọc số cũng được coi là yếu tố khiến cho
            các siêu phẩm sang trọng này trở nên đắt giá hơn.Với thiết kế độc
            đáo và thời trang, những sản phẩm này sẽ là lựa chọn tuyệt vời dành
            cho quý ông, doanh nhân thành đạt khi tới công sở.
          </div>
        </div>
        <div className="comment">
          <div className="comment-title">BÌNH LUẬN</div>
          <div className="comment-container">
            <div>{comments.length} bình luận</div>
            <div className="comment-content">
              <div className="comment-logo">
                <img
                  src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p74x74&_nc_cat=1&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=MQXJ_lqnI0gAX848L9M&_nc_ht=scontent.fsgn5-14.fna&edm=AJqh0Q8EAAAA&oh=00_AfB_wCsZzpsvBNVxUNA0jTLH4OfIMZfpG-nl5oxwMQ4wuQ&oe=6512F0F8"
                  alt="dsd"
                />
              </div>
              <input
                className="comment-input"
                placeholder="Viết bình luận..."
                value={newComment}
                onChange={handleCommentChange}
              />
              <button onClick={handleAddComment} className="comment-btn">
                Thêm bình luận
              </button>
            </div>
            <div className="comments-content">
              {comments.map((comment, index) => (
                <div key={index} className="comment-item">
                  <div className="comment-logo">
                    <img
                      src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p74x74&_nc_cat=1&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=MQXJ_lqnI0gAX848L9M&_nc_ht=scontent.fsgn5-14.fna&edm=AJqh0Q8EAAAA&oh=00_AfB_wCsZzpsvBNVxUNA0jTLH4OfIMZfpG-nl5oxwMQ4wuQ&oe=6512F0F8"
                      alt="dsd"
                    />
                  </div>
                  <div className="comments-body">
                    <div className="comment-name">
                      Hoang
                      <div className="comment-date"> {format(new Date(comment.createdAt), "yyyy-MM-dd HH:mm:ss")}</div>
                    </div>
                    <div className="comment-bd">{comment.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
