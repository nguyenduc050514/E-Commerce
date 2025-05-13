const Button = ({
   children = "Explore Product",
   minWidth = "207px",
   height = "60px",
   lineHeight = height,
   marginTop = "none",
   fontSize = "1.8rem",
   fontWeight = 600,
   background = "#005d63",
   color = "#fff",
   borderRadius = "none",
   border = "0px",
   onClick = () => {},
}) => {
   return (
      <button
         style={{
            minWidth,
            height,
            lineHeight,
            marginTop,
            fontSize,
            fontWeight,
            background,
            color,
            borderRadius,
            border,
         }}
         onClick={onClick}
      >
         {children}
      </button>
   );
};
export default Button;
