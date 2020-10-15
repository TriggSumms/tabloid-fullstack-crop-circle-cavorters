﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Tabloid.Models
{
    public class Comment
    {
        public int Id { get; set; }

        public int PostId { get; set; }

        [StringLength(255)]
        public string Subject { get; set; }
        public int UserProfileId { get; set; }
        public string Content { get; set; }

        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy}")]
        public DateTime CreateDateTime { get; set; }

        public Post Post { get; set; }
        public UserProfile UserProfile { get; set; }


    }
}
