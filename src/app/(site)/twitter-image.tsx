import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sandhya Sharma — Frontend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #FFFBFA 0%, #FFF5F3 30%, #FFEAED 70%, #FDD4DB 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(224, 141, 160, 0.12)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(230, 217, 240, 0.15)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: 18,
              color: "#E08DA0",
              fontFamily: "monospace",
              letterSpacing: 2,
            }}
          >
            {"// hello world"}
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "#2D2A2E",
              letterSpacing: -2,
              lineHeight: 1,
            }}
          >
            Sandhya Sharma
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: "#6E646A",
              marginTop: 4,
            }}
          >
            Frontend Engineer
          </div>
          <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
            {["React", "Next.js", "TypeScript", "Tailwind CSS"].map((tech) => (
              <div
                key={tech}
                style={{
                  padding: "8px 20px",
                  borderRadius: 999,
                  background: "rgba(255, 255, 255, 0.8)",
                  border: "1px solid rgba(253, 212, 219, 0.6)",
                  fontSize: 16,
                  fontWeight: 500,
                  color: "#C96B82",
                }}
              >
                {tech}
              </div>
            ))}
          </div>
          <div style={{ fontSize: 16, color: "#A0959C", marginTop: 20 }}>
            sandhyasharma.dev
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
