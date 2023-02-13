// You are given two string arrays positive_feedback and negative_feedback, containing the words denoting positive and negative feedback, respectively. Note that no word is both positive and negative.

// Initially every student has 0 points. Each positive word in a feedback report increases the points of a student by 3, whereas each negative word decreases the points by 1.

// You are given n feedback reports, represented by a 0-indexed string array report and a 0-indexed integer array student_id, where student_id[i] represents the ID of the student who has received the feedback report report[i]. The ID of each student is unique.

// Given an integer k, return the top k students after ranking them in non-increasing order by their points. In case more than one student has the same points, the one with the lower ID ranks higher.

// Example 1:

// Input: positive_feedback = ["smart","brilliant","studious"], negative_feedback = ["not"], report = ["this student is studious","the student is smart"], student_id = [1,2], k = 2
// Output: [1,2]
// Explanation:
// Both the students have 1 positive feedback and 3 points but since student 1 has a lower ID he ranks higher.
// Example 2:

// Input: positive_feedback = ["smart","brilliant","studious"], negative_feedback = ["not"], report = ["this student is not studious","the student is smart"], student_id = [1,2], k = 2
// Output: [2,1]
// Explanation:
// - The student with ID 1 has 1 positive feedback and 1 negative feedback, so he has 3-1=2 points.
// - The student with ID 2 has 1 positive feedback, so he has 3 points.
// Since student 2 has more points, [2,1] is returned.

var topStudents = function (
  positive_feedback,
  negative_feedback,
  report,
  student_id,
  k
) {
  let feedback = {};

  for (let i = 0; i < positive_feedback.length; i++) {
    feedback[positive_feedback[i]] = 3;
  }

  for (let i = 0; i < negative_feedback.length; i++) {
    feedback[negative_feedback[i]] = -1;
  }

  const numbersReport = report.map((rep) => {
    let count = 0;
    let repArray = rep.split(' ');
    repArray.forEach((word) => {
      feedback[word] ? (count += feedback[word]) : '';
    });
    return count;
  });

  let hash = {};

  for (let i = 0; i < numbersReport.length; i++) {
    hash[student_id[i]] = numbersReport[i];
  }

  const sortedHash = Object.entries(hash).sort((a, b) => {
    if (a[1] - b[1] > 0) {
      return -1;
    } else if (a[1] - b[1] < 0) {
      return 1;
    } else {
      if (+a[0] - +b[0] > 0) {
        return 1;
      } else {
        return -1;
      }
    }
  });

  return sortedHash.slice(0, k).map((elem) => +elem[0]);
};

console.log(
  topStudents(
    ['smart', 'brilliant', 'studious'],
    ['not'],
    ['this student is not studious', 'the student is smart'],
    [1, 2],
    2
  )
);
