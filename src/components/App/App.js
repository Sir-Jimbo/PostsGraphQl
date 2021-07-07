import React, { useState, useEffect, useRef } from 'react';
import useIntersectionObserver from '@react-hook/intersection-observer';
import PostsList from '../PostsList/PostsList';


const pageSize = 10

export default function App() {
  const [count, setCount] = useState(0);
  const ref = useRef(null)


  const { isIntersecting } = useIntersectionObserver(ref);

  console.log(isIntersecting);


  useEffect(() => {
    isIntersecting && setCount(count + pageSize)
  }, [isIntersecting]);

  return (
    <div>
      {(() => {
        const children = [];
        for (let i = 1; i <= count; i++) {
          children.push(<PostsList key={i} id={i} />);
        }
        return children;
      })()}
      <div ref={ref} style={{ width: "100%", height: "20px" }}>
        Is intersecting? {isIntersecting}
      </div>
    </div>
  )
}

