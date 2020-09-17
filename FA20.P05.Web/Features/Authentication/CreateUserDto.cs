﻿using System.ComponentModel.DataAnnotations;

namespace FA20.P05.Web.Features.Authentication
{
    public class CreateUserDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        public string Role { get; set; }

        public int? StaffId { get; set; }
    }
}