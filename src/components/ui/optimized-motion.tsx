import React from 'react';
import { motion, MotionProps, AnimatePresence } from 'framer-motion';

interface OptimizedMotionProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  shouldAnimate?: boolean;
  reducedMotion?: boolean;
}

export const OptimizedMotion: React.FC<OptimizedMotionProps> = ({
  children,
  className = '',
  as = 'div',
  shouldAnimate = true,
  reducedMotion = false,
  ...motionProps
}) => {
  // If reduced motion is preferred or animations are disabled, render without motion
  if (reducedMotion || !shouldAnimate) {
    const Component = as as any;
    return <Component className={className}>{children}</Component>;
  }

  const MotionComponent = motion[as as keyof typeof motion] as any;

  return (
    <MotionComponent
      className={className}
      {...motionProps}
      // Performance optimizations
      layout={false}
      layoutId={undefined}
      style={{
        ...motionProps.style,
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </MotionComponent>
  );
};

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  reducedMotion?: boolean;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
  as = 'div',
  reducedMotion = false,
}) => {
  if (reducedMotion) {
    const Component = as as any;
    return <Component className={className}>{children}</Component>;
  }

  return (
    <OptimizedMotion
      as={as}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      reducedMotion={reducedMotion}
    >
      {children}
    </OptimizedMotion>
  );
};

interface SlideInProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  reducedMotion?: boolean;
}

export const SlideIn: React.FC<SlideInProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  as = 'div',
  reducedMotion = false,
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 30 };
      case 'down':
        return { opacity: 0, y: -30 };
      case 'left':
        return { opacity: 0, x: 30 };
      case 'right':
        return { opacity: 0, x: -30 };
      default:
        return { opacity: 0, y: 30 };
    }
  };

  if (reducedMotion) {
    const Component = as as any;
    return <Component className={className}>{children}</Component>;
  }

  return (
    <OptimizedMotion
      as={as}
      className={className}
      initial={getInitialPosition()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      reducedMotion={reducedMotion}
    >
      {children}
    </OptimizedMotion>
  );
};

interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  reducedMotion?: boolean;
}

export const ScaleIn: React.FC<ScaleInProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  className = '',
  as = 'div',
  reducedMotion = false,
}) => {
  if (reducedMotion) {
    const Component = as as any;
    return <Component className={className}>{children}</Component>;
  }

  return (
    <OptimizedMotion
      as={as}
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      reducedMotion={reducedMotion}
    >
      {children}
    </OptimizedMotion>
  );
};

interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  reducedMotion?: boolean;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerDelay = 0.1,
  className = '',
  as = 'div',
  reducedMotion = false,
}) => {
  if (reducedMotion) {
    const Component = as as any;
    return <Component className={className}>{children}</Component>;
  }

  return (
    <OptimizedMotion
      as={as}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      }}
      reducedMotion={reducedMotion}
    >
      {children}
    </OptimizedMotion>
  );
};

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  reducedMotion?: boolean;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  className = '',
  as = 'div',
  reducedMotion = false,
}) => {
  if (reducedMotion) {
    const Component = as as any;
    return <Component className={className}>{children}</Component>;
  }

  return (
    <OptimizedMotion
      as={as}
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      }}
      reducedMotion={reducedMotion}
    >
      {children}
    </OptimizedMotion>
  );
};

export { AnimatePresence }; 