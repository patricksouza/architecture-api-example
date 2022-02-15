import { Challenge } from "../../src/domain/entities/challenge";
import { ChallengeRepository } from "./../../src/application/repositories/ChallengesRepository";

export class InMemoryChallengesRepository implements ChallengeRepository {
  public items: Challenge[] = [];

  async findById(id: string): Promise<Challenge | null> {
    const Challenge = this.items.find((Challenge) => Challenge.id === id);
    if (!Challenge) {
      return null;
    }
    return Challenge;
  }
}
