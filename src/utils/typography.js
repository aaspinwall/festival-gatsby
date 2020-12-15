import Typography from "typography";
import thm from "typography-theme-noriega";
const typography = new Typography(thm);

// Export helper functions
export const { scale, rhythm, options } = typography;
export default typography;
