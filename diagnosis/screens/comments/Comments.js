import React from 'react';
import Text from 'react-native';
import { useState, useEffect } from "react";
import Form from "./Form";
import Comment from "./Comment";
import { getComments as getCommentsApi,
  createComment as createCommentApi,
  updateComment as updateCommentApi,
  deleteComment as deleteCommentApi,
} from "./api";
import WebView from 'react-native-webview';

const Comments = ({currentUserId }) => {
  return (
      <Comment currentUserId="1"/>
  );
};
export default Comments;