declare module "particlesjs" {
  interface ParticlesOptions {
    selector: string;
    maxParticles?: number;
    sizeVariations?: number;
    speed?: number;
    color?: string[];
    minDistance?: number;
    connectParticles?: boolean;
  }

  interface ParticlesInstance {
    destroy?: () => void;
  }

  interface ParticlesJs {
    init(options: ParticlesOptions): ParticlesInstance;
  }

  const particlesjs: ParticlesJs;
  export default particlesjs;
}
