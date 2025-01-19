interface Config {
  PORT: number;
  DATABASE_URL: string;
  HELIUS_API_KEY: string;
  /** rest of code here **/
}

const config: Config = {
  PORT: parseInt(process.env.PORT || '3000'),
  DATABASE_URL: process.env.DATABASE_URL!,
  HELIUS_API_KEY: process.env.HELIUS_API_KEY!,
  /** rest of code here **/
};

export default config;

