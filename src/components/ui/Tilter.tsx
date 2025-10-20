import { useRef, type MouseEvent } from "react";

function capRotateValue(value: number, rotationCapDeg: number) {
	if (value > rotationCapDeg) return rotationCapDeg;
	if (value < -rotationCapDeg) return -rotationCapDeg;
	return value;
}

function getTransformStyles({
	rotateX,
	rotateY,
	perspective,
}: {
	rotateX: number;
	rotateY: number;
	perspective: number;
}) {
	return `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

type InitialSettings = {
	rotationCapDeg: number;
	perspective: number;
	transitionDuration: number;
	easing: string;
	isReverse: boolean;
	elevation: number;
	classNames: {
		tilterRoot: string;
		cardRoot: string;
		cardContentElevator: string;
	};
};

const initialSettings: InitialSettings = {
	rotationCapDeg: 30,
	perspective: 1600,
	transitionDuration: 1500,
	easing: "cubic-bezier(.03,.98,.52,.99)",
	isReverse: true,
	elevation: 50,
	classNames: {
		tilterRoot: "tilter-root",
		cardRoot: "card-root",
		cardContentElevator: "card-content-elevator",
	},
};

type Props = {
	children: React.ReactNode;
};

function Tilter({ children }: Props) {
	const cardRef = useRef<HTMLDivElement | null>(null);

	let isAnimationFramePending = false;
	let lastMouseMoveEvent: MouseEvent | null = null;

	function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
		if (!cardRef.current || isAnimationFramePending) return;
		lastMouseMoveEvent = e;

		isAnimationFramePending = true;
		requestAnimationFrame(() => {
			if (!lastMouseMoveEvent || !cardRef.current) {
				isAnimationFramePending = false;
				return;
			}

			const {
				offsetWidth: cardWidth,
				offsetHeight: cardHeight,
				style,
			} = cardRef.current;

			const halfCardWidth = cardWidth / 2;
			const halfCardHeight = cardHeight / 2;

			const { top, left } = cardRef.current.getBoundingClientRect();
			const cardCenterX = left + halfCardWidth;
			const cardCenterY = top + halfCardHeight;

			const mouseFromCenterX = lastMouseMoveEvent.clientX - cardCenterX;
			const mouseFromCenterY = lastMouseMoveEvent.clientY - cardCenterY;

			const uncappedRotateX =
				(mouseFromCenterY * initialSettings.rotationCapDeg) /
				halfCardHeight;
			const uncappedRotateY = -(
				(mouseFromCenterX * initialSettings.rotationCapDeg) /
				halfCardWidth
			);

			const rotateX = capRotateValue(
				uncappedRotateX,
				initialSettings.rotationCapDeg
			);
			const rotateY = capRotateValue(
				uncappedRotateY,
				initialSettings.rotationCapDeg
			);

			const transformStyles = getTransformStyles({
				rotateX: initialSettings.isReverse ? -rotateX : rotateX,
				rotateY: initialSettings.isReverse ? -rotateY : rotateY,
				perspective: initialSettings.perspective,
			});

			style.transform = transformStyles;
			isAnimationFramePending = false;
		});
	}

	function handleMouseLeave() {
		if (!cardRef.current) return;

		// Reset the transform to center
		cardRef.current.style.transform = getTransformStyles({
			perspective: initialSettings.perspective,
			rotateX: 0,
			rotateY: 0,
		});

		// Reset the animation frame flag
		isAnimationFramePending = false;
		lastMouseMoveEvent = null;
	}

	return (
		<div
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			className={`${initialSettings.classNames.tilterRoot} bg-[#1E2A47] rounded-lg shadow-lg`}
			style={{
				padding: "1rem",
				boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)",
			}}
		>
			<div
				ref={cardRef}
				className={initialSettings.classNames.cardRoot}
				style={{
					transformStyle: "preserve-3d",
					transition: `transform ${initialSettings.transitionDuration}ms ${initialSettings.easing}`,
				}}
			>
				<div
					className={initialSettings.classNames.cardContentElevator}
					style={{
						transform: `translateZ(${initialSettings.elevation}px)`,
					}}
				>
					{children}
				</div>
			</div>
		</div>
	);
}

export default Tilter;
