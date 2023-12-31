import { useMemo } from "react";

export const useSortedPost = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        } else {
            return posts;
        }
      }, [posts, sort]);

      return sortedPosts;
}

export const usePost = (posts, sort, query) => {
    const sortedPosts = useSortedPost(posts, sort)
    const sortAndSearchPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
      }, [query, sortedPosts]);
    
    return sortAndSearchPosts;
}