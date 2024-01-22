import { cn } from "@/lib/utils";

describe("testing cn util function", () => {
  it("should constructe strings (variadic)", () => {
    const result = cn("px-3", true && "mx-2", "py-3");
    expect(result).toBe("px-3 mx-2 py-3");
  });

  it("should constructe objects (variadic)", () => {
    const result = cn("px-3", { "mx-2": true, "py-3": false });
    expect(result).toBe("px-3 mx-2");
  });

  it("should merge tailwind classes", () => {
    const result = cn("px-3 px-4");
    expect(result).toBe("px-4");
  });

  it("should merge tailwind classes with strings (variadic)", () => {
    const result = cn("px-3", true && "px-2", "py-3");
    expect(result).toBe("px-2 py-3");
  });

  it("should merge tailwind classes with objects (variadic)", () => {
    const result = cn("px-3", { "px-2": false, "px-5": true });
    expect(result).toBe("px-5");
  });
});
