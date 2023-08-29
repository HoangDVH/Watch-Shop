import React, { useEffect, useState } from "react";
import { NewsDetailContent } from "../../component/News/NewsDetailContent";
import { useParams } from "react-router";
import { Navbar } from "../../component/NavBar/Navbar";
import { HeaderSale } from "../../component/HeaderSale/HeaderSale";
import { BreadCrumb } from "../../component/BreadCrumb/BreadCrumb";
import { Footer } from "../../component/Footer/Footer";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setComments } from "../../store/commentsSlice";
export const NewsDetailPage = () => {
  const { news } = useParams();
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments);

  useEffect(() => {
    axios
      .get('https://64c7a247a1fe0128fbd50e91.mockapi.io/comments')
      .then((response) => {
        const commentsData = response.data;
        dispatch(setComments(commentsData)); // Dispatch the setComments action
      })
      .catch((error) => {
        console.error('Error fetching comments:', error);
      });
  }, [dispatch]);

  // Filter comments based on the news article
  const filteredComments = comments.filter(comment => comment.news === news);

  return (
    <>
      <Navbar />
      <HeaderSale />
      <BreadCrumb />
      <NewsDetailContent news={news} comments={filteredComments} />
      <Footer />
    </>
  );
};
