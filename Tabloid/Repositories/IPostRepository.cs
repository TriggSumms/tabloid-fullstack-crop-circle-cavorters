﻿using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface IPostRepository
    {
        List<Post> GetAllApprovedPosts();
        public Post GetPublishedPostById(int id);
        void Add(Post post);
    }
}