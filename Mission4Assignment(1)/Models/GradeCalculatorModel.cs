using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4Assignment_1_.Models
{
    public class GradeCalculatorModel
    {
        //showing that the input is a required field and to pull up an error message if it's not a valid number
        [Required]
        [Range(0, 100, ErrorMessage = "Assignments score must be between 0 and 100")]
        //getters and setters
        public int Assignments { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Projects score must be between 0 and 100")]
        public int Projects { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Quizzes score must be between 0 and 100")]
        public int Quizzes { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Midterm score must be between 0 and 100")]
        public int Midterm { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Final Exam score must be between 0 and 100")]
        public int Final { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "INTEX score must be between 0 and 100")]
        public int Intex { get; set; }
    }
}
