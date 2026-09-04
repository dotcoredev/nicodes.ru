import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
	output: "standalone",
	outputFileTracingIncludes: {
		"/*": ["./node_modules/@swc/helpers/**/*"],
	},
};

export default nextConfig;
