import { siteConfig } from "@/data/site";
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = `${siteConfig.name} — Full Stack Software Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
          border: "1px solid #e2e8f0",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: "#2563EB",
            marginBottom: 24,
          }}
        >
          Full Stack Software Engineer
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#0F172A",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 28,
            color: "#64748B",
            maxWidth: 800,
            lineHeight: 1.5,
          }}
        >
          Building scalable web applications, e-commerce platforms and digital
          products.
        </div>
      </div>
    ),
    { ...size }
  );
}
