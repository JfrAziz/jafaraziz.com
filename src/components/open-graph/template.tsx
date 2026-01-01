import Logo from "@/assets/logo.svg?url";

/**
 * Opengraph template to generate svg
 */
export const Template = (props: { title: string; date: Date }) => (
  <div
    style={{
      height: "100%",
      width: "100%",
      display: "flex",
      backgroundColor: "white",
      backgroundImage:
        "radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)",
      backgroundSize: "100px 100px",
      fontFamily: "JetBrainsMono-Bold",
    }}
  >
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: "20px",
        display: "flex",
        alignItems: "stretch",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          border: "1px solid #374151",
          boxShadow: "5px 5px 0px #374151",
          width: "100%",
          height: "100%",
          padding: "10px",
        }}
      >
        <div
          style={{
            fontSize: "32px",
            fontWeight: "900",
            lineHeight: "3rem",
            padding: "10px 0 50px 0",
            color: "#374151",
            flex: 1,
            display: "flex",
            fontFamily: "PlusJakartaSans",
          }}
        >
          {props.title}
        </div>
        <div
          style={{
            fontSize: "16px",
            fontWeight: "900",
            color: "#374151",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            {props.date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ marginRight: "16px" }}>Jafar Aziz</span>
            <img src={Logo} alt={props.title} width={24} height={24} />
          </div>
        </div>
      </div>
    </div>
  </div>
);
