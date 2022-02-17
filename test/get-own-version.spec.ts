const {getVersion} = require("../src/get-own-version");

describe("getVersion()", () => {
  it("should be defined", async () => {
    expect(await getVersion()).toBeDefined();
  });

  it("should return a none empty string", async () => {
    expect(await getVersion()).toBeDefined();
    expect(await getVersion()).not.toBeNull();
    expect(await getVersion()).toBeTruthy();
  });

  it("should return version in format major.minor.patch", async () => {
    const version = await getVersion();
    const versionArr = version.split(".");

    // check the major.minor.patch format
    expect(versionArr.length).toBe(3);
  });

  it("should return 1.1.0", async () => {
    // update this on version upgrades
    expect(await getVersion()).toBe("1.1.0");
  })
});
