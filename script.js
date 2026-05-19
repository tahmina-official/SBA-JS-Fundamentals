// ================================
// Course Information
// ================================
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// ================================
// Assignment Group
// ================================
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// ================================
// Learner Submissions
// ================================
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

// ================================
// Helper Function
// ================================
function isValidNumber(value) {
  return typeof value === "number" && !isNaN(value);
}

// ================================
// MAIN FUNCTION
// ================================
function getLearnerData(course, ag, submissions) {
  try {
    // ----------------------------
    // IF / ELSE validation (REQ)
    // ----------------------------
    if (course.id !== ag.course_id) {
      throw new Error("Course mismatch with Assignment Group");
    } else {
      console.log("Validation passed");
    }
    const result = [];
    const learners = {};
    const assignmentMap = {};

    const now = new Date();
    let hasValidData = false; // boolean requirement

    // ================================
    // LOOP TYPE 1: for...of (assignments)
    // ================================
    for (let assignment of ag.assignments) {
      if (!isValidNumber(assignment.points_possible) || assignment.points_possible <= 0) {
        throw new Error(`Invalid points_possible for assignment ${assignment.id}`);
      }

      assignmentMap[assignment.id] = assignment;
    }
    // ================================
    // LOOP TYPE 2: for...of (submissions)
    // ================================
    for (let sub of submissions) {
      const assignment = assignmentMap[sub.assignment_id];

      // IF / ELSE control flow
      if (!assignment) {
        continue; // LOOP CONTROL (REQ: continue)
      } else {
        hasValidData = true;
      }

      const dueDate = new Date(assignment.due_at);

      // skip future assignments
      if (dueDate > now) {
        continue;
      }

      const learnerId = sub.learner_id;
      let score = sub.submission.score;

      // validation
      if (!isValidNumber(score)) {
        throw new Error(`Invalid score for learner ${learnerId}`);
      }

      const submittedAt = new Date(sub.submission.submitted_at);

      // late penalty
      if (submittedAt > dueDate) {
        score -= assignment.points_possible * 0.1;
      } else {
        score = score;
      }

      score = Math.max(0, score);

      // create learner object if missing
      if (!learners[learnerId]) {
        learners[learnerId] = {
          id: learnerId,
          totalScore: 0,
          totalPoints: 0
        };
      }
      
      learners[learnerId][assignment.id] =
        +(score / assignment.points_possible).toFixed(3);

      learners[learnerId].totalScore += score;
      learners[learnerId].totalPoints += assignment.points_possible;

    }

     // ================================
    // LOOP TYPE 3: for...in (REQ second loop type)
    // ================================
    for (let id in learners) {
      const learner = learners[id];

      learner.avg =
        learner.totalPoints === 0
          ? 0
          : +(learner.totalScore / learner.totalPoints).toFixed(3);

      delete learner.totalScore;
      delete learner.totalPoints;

      result.push(learner);

      // LOOP CONTROL KEYWORD (break requirement)
      if (result.length > 1000) {
        break;
      }
    }

  } catch (error) {
    console.log("Error:", error.message);
    return [];
  }
}