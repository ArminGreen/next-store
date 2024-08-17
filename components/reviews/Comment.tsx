"use client";

import { useState } from "react";
import { Button } from "../ui/button";

function Comment({ comment }: { comment: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpandedComment = () => {
    setIsExpanded(!isExpanded);
  };

  const longComment = comment.length > 130;
  const displayComment =
    longComment && !isExpanded ? `${comment.slice(0, 130)}...` : comment;
  return (
    <div>
      <p className="text-sm">{displayComment}</p>
      {longComment && (
        <Button
          variant="link"
          className="pl-0 text-muted-foreground"
          onClick={toggleExpandedComment}
        >
          {isExpanded ? "Show Less" : "Show More"}
        </Button>
      )}
    </div>
  );
}
export default Comment;