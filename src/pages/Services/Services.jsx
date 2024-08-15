import React, { useState } from 'react';
import Text from '../../components/Text/Text';
import Card from '../../components/Card/Card';
import Dialog from '../../components/Dialog/Dialog'; // Adjust the import path accordingly
import styles from './services.module.css';
import RTLImage from '../../assets/RTLImage.jpeg';
import DesignVerification from '../../assets/DesignVerification.jpeg';
import DFTImage from '../../assets/Testability.jpeg';
import PhysicalDesignImage from '../../assets/physicalDesign.jpeg';
import PostSilicon from '../../assets/postSilicon.jpeg';

const Services = () => {
    const services = [
        { 
            label: "RTL DESIGNING", 
            icon: RTLImage, 
            textColor: "red",
            content: (
                <p>
                    <strong>RTL (Register Transfer Level)</strong> Design is a crucial phase in the VLSI design process, where the behavior of a digital circuit is described using registers, logic gates, and datapaths at a high abstraction level. It serves as the bridge between architectural design specifications and the implementation of the hardware.
                </p>
            ),
            sideContent: (
                <div>
                    <h3>Key Elements of RTL Design</h3>
                    <ul>
                        <li><strong>Behavioral Description:</strong> Designers define the behavior of the digital circuit using behavioral constructs in HDLs. This includes specifying operations, control signals, state machines, and timing constraints to accurately model the intended functionality of the circuit.</li>
                        <li><strong>Modularity and Hierarchy:</strong> RTL Design promotes modularity and hierarchical organization of the digital system. Designers encapsulate functional units (modules) within the design, allowing for easier management, reusability, and scalability of the overall system.</li>
                        <li><strong>Synchronous Design:</strong> RTL Design primarily follows a synchronous design methodology, where registers (flip-flops) synchronize the flow of data and control signals across different parts of the circuit. Timing constraints, clock signals, and timing diagrams are essential for ensuring proper synchronization and timing behavior.</li>
                    </ul>
                </div>
            )
        },
        { 
            label: "DESIGN VERIFICATION", 
            icon: DesignVerification, 
            textColor: "blue",
            content: (
                <p>
                    In <strong>VLSI design</strong>, errors can have profound consequences, ranging from functional failures to costly rework during manufacturing. Design Verification aims to identify and resolve potential issues early in the design cycle, minimizing risks and optimizing time-to-market. By validating the design against specifications and requirements, verification engineers ensure that the chip behaves as expected under different operating conditions and use cases.
                </p>
            ),
            sideContent: (
                <div>
                    <h3>Key Components of Design Verification</h3>
                    <ul>
                        <li><strong>Functional Verification:</strong> This phase focuses on verifying the functional correctness of the design. Verification engineers use simulation-based techniques, such as testbenches and stimulus generation, to stimulate the design with various input scenarios and verify the correctness of outputs. Techniques like constrained random testing, coverage-driven verification, and formal verification are employed to exhaustively test different aspects of the design.</li>
                        <li><strong>Timing Verification:</strong> Timing verification ensures that the design meets timing requirements, such as clock frequency and setup/hold times for flip-flops and registers. Static timing analysis (STA) tools are used to analyze timing paths and ensure that critical timing constraints are met across the entire chip.</li>
                        <li><strong>Power Verification:</strong> Power consumption is a critical concern in modern VLSI designs. Power verification ensures that the design meets power budget constraints and identifies areas for power optimization. Techniques such as power-aware simulation and analysis are employed to estimate and verify power consumption at different operational modes.</li>
                        <li><strong>Design for Testability (DFT):</strong> DFT techniques are integrated into the design to facilitate efficient testing during manufacturing. DFT verification ensures that testability features, such as scan chains, built-in self-test (BIST) circuits, and boundary scan cells, function correctly and enable comprehensive testing of the chip.</li>
                    </ul>
                </div>
            )
        },
        { 
            label: "DFT (DESIGN FOR TESTABILITY)", 
            icon: DFTImage, 
            textColor: "green",
            content: (
                <p>
                    In modern VLSI design, where chips contain billions of transistors and complex interconnections, <strong>DFT</strong> is essential for identifying manufacturing defects, ensuring functional correctness, and meeting quality standards. By embedding testability features into the design, DFT enables cost-effective testing and enhances the yield of semiconductor manufacturing processes.
                </p>
            ),
            sideContent: (
                <div>
                    <h3>Key Components of DFT</h3>
                    <ul>
                        <li><strong>Scan Chains:</strong> Scan chains are a fundamental DFT technique used to facilitate serial access to internal registers within the chip for testing purposes. During test mode, test patterns can be shifted into these registers and their responses captured for analysis, enabling comprehensive testing of sequential logic elements.</li>
                        <li><strong>Built-In Self-Test (BIST):</strong> BIST incorporates dedicated test circuitry within the chip to autonomously generate test patterns, apply them to the circuitry under test, and analyze the resulting responses. BIST reduces dependency on external test equipment and enhances test coverage for embedded memories, processors, and other complex structures.</li>
                        <li><strong>Boundary Scan (IEEE 1149.1):</strong> Boundary Scan is a standardized DFT technique defined by IEEE 1149.1 (JTAG) that provides a means to test interconnections (such as PCB traces and chip pins) and to access internal nodes in a chip for testing and debugging purposes. It enables structural testing of the chip's connectivity and facilitates in-system programming and debugging.</li>
                        <li><strong>Design Compiler Insertion:</strong> Design Compiler Insertion involves automatically inserting test logic structures (such as scan chains and BIST controllers) into the RTL (Register Transfer Level) design during synthesis. This ensures seamless integration of DFT features while optimizing the design for area, timing, and power.</li>
                    </ul>
                </div>
            )
        },
        { 
            label: "PHYSICAL DESIGN", 
            icon: PhysicalDesignImage, 
            textColor: "purple",
            content: (
                <p>
                    <strong>Physical Design</strong> in VLSI (Very Large Scale Integration) is a crucial stage in the semiconductor manufacturing process, where the logical circuit representation of a chip is transformed into a physical layout that can be fabricated. It involves a meticulous balance of creativity, engineering principles, and cutting-edge technology to achieve optimal performance, manufacturability, and reliability.
                </p>
            ),
            sideContent: (
                <div>
                    <h3>Key Steps in Physical Design</h3>
                    <ul>
                        <li><strong>Floorplanning:</strong> The initial step involves partitioning the chip area into manageable blocks and arranging them to minimize wire lengths and optimize signal propagation delays. Floorplanning sets the groundwork for subsequent stages.</li>
                        <li><strong>Placement:</strong> Components (cells) from the netlist are placed within the predefined blocks on the chip, taking into account factors such as timing constraints, signal integrity, and thermal considerations. Advanced placement algorithms ensure efficient use of space while meeting design specifications.</li>
                        <li><strong>Routing:</strong> Once components are placed, interconnections (metal wires) must be routed between them to establish electrical connections. Routing algorithms navigate through the complex maze of obstacles while adhering to design rules to minimize area and delay.</li>
                        <li><strong>Optimization:</strong> Iterative optimization techniques are employed throughout the process to refine and enhance the layout. This includes clock tree synthesis for efficient distribution of clock signals and power grid design to ensure stable and efficient power distribution.</li>
                    </ul>
                </div>
            )
        },
        { 
            label: "POST SILICON", 
            icon: PostSilicon, 
            textColor: "orange",
            content: (
                <p>
                    <strong>Post-Silicon</strong> Validation is a critical phase in the lifecycle of VLSI chips, where the fabricated silicon is tested rigorously to ensure functionality, performance, and reliability before mass production and deployment. It involves comprehensive testing, debugging, and validation of the physical chip to identify and resolve issues that may arise due to manufacturing variations, design flaws, or operational conditions.
                </p>
            ),
            sideContent: (
                <div>
                    <h3>Key Components of Post-Silicon Validation</h3>
                    <ul>
                        <li><strong>Bring-Up and Initialization:</strong> The initial phase involves powering up the fabricated chip and performing basic functionality checks. This includes verifying power distribution, clock signals, and initial communication interfaces to establish basic operational functionality.</li>
                        <li><strong>Functional Validation:</strong> Functional testing involves executing a series of test patterns and stimuli on the chip to verify its functional correctness. Test vectors generated during pre-silicon simulation and additional post-silicon-specific tests are applied to validate the chip's behavior under various operational modes and corner cases.</li>
                        <li><strong>Performance Validation:</strong> Performance testing assesses the chip's speed, throughput, and latency characteristics against design specifications. This includes measuring timing constraints, signal integrity, and overall system performance to ensure optimal operation.</li>
                        <li><strong>Power and Thermal Validation:</strong> Power and thermal testing evaluate the chip's power consumption and heat dissipation characteristics. Techniques such as dynamic power analysis and thermal profiling ensure that the chip operates within specified thermal limits and power budgets.</li>
                        <li><strong>Reliability and Stress Testing:</strong> Reliability testing involves subjecting the chip to stress conditions, including voltage variations, temperature extremes, and environmental factors, to assess its robustness and reliability over its intended lifespan.</li>
                    </ul>
                </div>
            )
        }
    ];
    
    const [dialogContent, setDialogContent] = useState(null);
    const [dialogSideContent, setDialogSideContent] = useState(null);

    const handleReadMore = (content, sideContent) => {
        setDialogContent(content);
        setDialogSideContent(sideContent);
    };

    const closeDialog = () => {
        setDialogContent(null);
        setDialogSideContent(null);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h1 className={styles.heading}>
                    The Services We Offer
                </h1>
                <div className={styles.servicesWrapper}>
                    <div className={styles.services}>
                        {services.map((service, index) => (
                            <Card 
                                key={index}
                                className={styles.serviceCard}
                                height="350px"
                                width="300px"
                                backgroundColor="#f4f4f4"
                            >
                                <Text
                                    label={service.label}
                                    icon={service.icon}
                                    textColor={service.textColor}
                                    iconHeight="120px"  
                                    iconWidth="150px"
                                    textSize="14px" 
                                />
                                <div className={styles.contentWrapper}>
                                    <p className={styles.truncatedContent}>
                                        {service.content}
                                    </p>
                                    <span 
                                        className={styles.readMore} 
                                        onClick={() => handleReadMore(service.content, service.sideContent)}
                                    >
                                        ...Read more
                                    </span>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
            {dialogContent && (
                <Dialog 
                    width="900px" 
                    height="auto" 
                    onClose={closeDialog} 
                    mainContent={<p>{dialogContent}</p>} 
                    sideContent={dialogSideContent} 
                />
            )}
        </div>
    );
};

export default Services;
