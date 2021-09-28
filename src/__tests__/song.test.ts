import { getSong } from "../song";
import { getSongResult } from "./fixtures/fixturesService";

describe("song", () => {
  describe("getSong", () => {
    it("returns some string", () => {
      const actual = getSong();

      expect(typeof actual).toBe("string");
    });
    it("returns some exact expected song in correct format", () => {
      const actual = getSong();
      const result = getSongResult();

      expect(actual).toBe(result);
    });
  });
});
