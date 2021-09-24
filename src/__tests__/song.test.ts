import { getSong } from "../song";

describe("song", () => {
  describe("getSong", () => {
    it("returns some string", () => {
      const actual = getSong();

      expect(typeof actual).toBe("string");
    });
  });
});
