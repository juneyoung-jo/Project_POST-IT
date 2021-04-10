// 기본 테마 스타일을 지정해줘야 typescript 환경에서 theme props를 사용할 수 있습니다.
import 'styled-components';

// and extend it
declare module 'styled-components' {
  export interface DefaultTheme {
    fontSizes: {
      xs: string;
      sm: string;
      base: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      title: string;
    };
    colors: {
      first: string;
      second: string;
      mint: string;
      purple: string;
      text: {
        first: string;
        second: string;
        third: string;
      };
      card: {
        title: string;
        content: string;
        tag: string;
      };
    };
    gradient: {
      main: string;
    };
  }
}
