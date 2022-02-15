import { InMemoryChallengesRepository } from "../../../tests/repositories/in-memory-challenges-repository";
import { InMemoryStudentsRepository } from "../../../tests/repositories/in-memory-students-repository";
import { Challenge } from "../../domain/entities/challenge";
import { Student } from "../../domain/entities/student";
import { CreateChallengeSubmission } from "./create-challenge-submission";

describe("Create challenge submission use case", () => {
  it("should be able to create a new challenge submission", async () => {
    // O conceito de "in memory" é sobre criar armazenamentos temporários de valores que serão usados no teste
    const studentRepository = new InMemoryStudentsRepository();
    const challengesRepository = new InMemoryChallengesRepository();

    const student = Student.create({
      name: "Patrick",
      email: "doe@example.com",
    });

    const challenge = Challenge.create({
      title: "Challenge 01",
      instructionsUrl: "http://example.com",
    });

    studentRepository.items.push(student);
    challengesRepository.items.push(challenge);

    //sut === system under test
    const sut = new CreateChallengeSubmission(
      studentRepository,
      challengesRepository
    );

    const response = await sut.execute({
      studentId: student.id,
      challengeId: challenge.id,
    });

    expect(response).toBeTruthy();
  });
});
