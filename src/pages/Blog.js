import React from "react";
// PageStyles
import { PageContainer, BLOG_LINK_BOX } from "../components/PageStyles";

const Blog = () => {
  return (
    <PageContainer>
      <BLOG_LINK_BOX>
      <div className="title-holder">
        1
      </div>
      <div className="blurb-holder">
        2
      </div>
      <div className="img-holder">
        3
      </div>
      </BLOG_LINK_BOX>
      <BLOG_LINK_BOX>
      <div className="title-holder">
        1
      </div>
      <div className="blurb-holder">
        2
      </div>
      <div className="img-holder">
        3
      </div>
      </BLOG_LINK_BOX>
      <BLOG_LINK_BOX>
      <div className="title-holder">
        1
      </div>
      <div className="blurb-holder">
        2
      </div>
      <div className="img-holder">
        3
      </div>
      </BLOG_LINK_BOX>
    </PageContainer>
  );
};

export default Blog;
