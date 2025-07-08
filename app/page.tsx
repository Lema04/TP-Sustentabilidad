"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Leaf,
  Cpu,
  Users,
  Globe,
  DollarSign,
  Info,
  Menu,
  X,
  Download,
  ArrowRight,
  TreePine,
  Recycle,
  Lightbulb,
  Target,
  Clock,
  MapPin,
  Cog,
  Hammer,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const navigationItems = [
  { href: "#que-es", label: "¿Qué es?" },
  { href: "#por-que", label: "¿Por qué?" },
  { href: "#para-que", label: "¿Para qué?" },
  { href: "#quien", label: "¿Quién?" },
  { href: "#cuando", label: "¿Cuándo?" },
  { href: "#donde", label: "¿Dónde?" },
  { href: "#como", label: "¿Cómo?" },
  { href: "#con-que", label: "¿Con qué?" },
  { href: "#cuanto", label: "¿Cuánto?" },
]

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="font-bold text-xl text-green-800">Sustentabilidad</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.href.substring(1)
                      ? "bg-green-100 text-green-800"
                      : "text-gray-600 hover:text-green-600 hover:bg-green-50"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-green-100"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigationItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-green-600 hover:bg-green-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="font-sans text-gray-800 bg-white scroll-smooth pt-16">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50" />
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-10" />

          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <TreePine className="h-4 w-4" />
                <span>Sustentabilidad Digital</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-green-800 leading-tight">
                Un presente consciente,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                  un futuro sustentable
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Explorá cómo la sustentabilidad se convierte en el eje central de un cambio real.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full">
                <a href="#que-es" className="flex items-center space-x-2">
                  <span>Empezar a explorar</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 rounded-full bg-transparent"
              >
                <a href="/TP1-Sustentabilidad.pdf" download className="flex items-center space-x-2">
                  <Download className="h-4 w-4" />
                  <span>Descargar Informe</span>
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Floating elements */}
          <div className="absolute top-20 left-10 opacity-20">
            <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}>
              <Leaf className="h-16 w-16 text-green-500" />
            </motion.div>
          </div>
          <div className="absolute bottom-20 right-10 opacity-20">
            <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}>
              <Recycle className="h-12 w-12 text-green-400" />
            </motion.div>
          </div>
        </section>

        {/* What is Sustainability */}
        <section id="que-es" className="min-h-screen py-24 px-6 bg-white scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-green-100 rounded-full">
                    <Leaf className="h-8 w-8 text-green-600" />
                  </div>
                  <h2 className="text-4xl font-bold text-green-800">¿Qué es la sustentabilidad?</h2>
                </div>

                <div className="space-y-6">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Es un concepto integrador que busca el equilibrio entre las necesidades actuales y las futuras, con
                    un enfoque sistémico que abarca lo ambiental, lo social y lo económico.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <Card className="border-green-200">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-green-700 mb-2">Definición</h4>
                        <p className="text-sm text-gray-600">Continuidad y ética intergeneracional</p>
                      </CardContent>
                    </Card>
                    <Card className="border-green-200">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-green-700 mb-2">Naturaleza</h4>
                        <p className="text-sm text-gray-600">Dinámica y relacional</p>
                      </CardContent>
                    </Card>
                    <Card className="border-green-200">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-green-700 mb-2">Significado</h4>
                        <p className="text-sm text-gray-600">Valores sociales y culturales</p>
                      </CardContent>
                    </Card>
                    <Card className="border-green-200">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-green-700 mb-2">Descripción</h4>
                        <p className="text-sm text-gray-600">Gestión responsable</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/mapa-mental.png?height=400&width=500"
                  alt="Sustentabilidad conceptual"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-green-500 text-white p-4 rounded-full">
                  <Lightbulb className="h-8 w-8" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why be sustainable */}
        <section id="por-que" className="min-h-screen py-24 px-6 bg-gray-50 scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Info className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-4xl font-bold text-green-800">¿Por qué ser sustentable?</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {[
                  { icon: Target, title: "Crisis Globales", desc: "Respuesta a crisis ambientales y sociales" },
                  { icon: Cpu, title: "Competitividad", desc: "Ventaja estratégica y resiliencia" },
                  { icon: Users, title: "Ética Universal", desc: "Principios éticos fundamentales" },
                  { icon: Lightbulb, title: "Innovación", desc: "Transformación organizacional" },
                  { icon: DollarSign, title: "Beneficio Económico", desc: "Justificación económica tangible" },
                  { icon: Globe, title: "Necesidad Global", desc: "Circunstancias ineludibles" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <item.icon className="h-12 w-12 text-green-600 mb-4" />
                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Ser sustentable ya no es una opción</h3>
                  <p className="text-xl opacity-90">Es una necesidad sistémica para el futuro</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Para qué Section */}
        <section
          id="para-que"
          className="min-h-screen flex items-center justify-center py-24 px-6 bg-gradient-to-br from-blue-50 to-indigo-50 scroll-mt-20"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Target className="h-8 w-8 text-blue-600" />
                  </div>
                  <h2 className="text-4xl font-bold text-blue-800">¿Para qué ser sustentable?</h2>
                </div>

                <div className="space-y-6">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Ser sustentable tiene como propósito promover un nuevo modelo de desarrollo equitativo y
                    regenerativo, garantizando la vida digna y el equilibrio ecosistémico a largo plazo.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-blue-700 mb-2">Propósito</h4>
                        <p className="text-sm text-gray-600">Desarrollo equitativo y regenerativo</p>
                      </CardContent>
                    </Card>
                    <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-blue-700 mb-2">Objetivo</h4>
                        <p className="text-sm text-gray-600">Desempeño responsable concreto</p>
                      </CardContent>
                    </Card>
                    <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-blue-700 mb-2">Finalidad</h4>
                        <p className="text-sm text-gray-600">Vida digna y equilibrio ecosistémico</p>
                      </CardContent>
                    </Card>
                    <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-blue-700 mb-2">Intención</h4>
                        <p className="text-sm text-gray-600">Transformación organizacional ética</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Propósito de la sustentabilidad"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-500 text-white p-4 rounded-full">
                  <Target className="h-8 w-8" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quién Section */}
        <section
          id="quien"
          className="min-h-screen flex items-center justify-center py-24 px-6 bg-gradient-to-br from-purple-50 to-pink-50 scroll-mt-20"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className="relative order-2 lg:order-1">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Actores de la sustentabilidad"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-purple-500 text-white p-4 rounded-full">
                  <Users className="h-8 w-8" />
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <h2 className="text-4xl font-bold text-purple-800">¿Quiénes deben ser sustentables?</h2>
                </div>

                <div className="space-y-6">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Todos los actores forman parte de un ecosistema que hace posible la transformación sustentable,
                    desde líderes hasta beneficiarios.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-purple-700 mb-2">Responsables</h4>
                        <p className="text-sm text-gray-600">Lideran con visión estratégica</p>
                      </CardContent>
                    </Card>
                    <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-purple-700 mb-2">Intervinientes</h4>
                        <p className="text-sm text-gray-600">Colaboran desde áreas clave</p>
                      </CardContent>
                    </Card>
                    <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-purple-700 mb-2">Afectados</h4>
                        <p className="text-sm text-gray-600">Beneficiarios de las acciones</p>
                      </CardContent>
                    </Card>
                    <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-purple-700 mb-2">Ecosistema</h4>
                        <p className="text-sm text-gray-600">Articulación de todos los roles</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cuándo Section */}
        <section
          id="cuando"
          className="min-h-screen flex items-center justify-center py-24 px-6 bg-gradient-to-br from-orange-50 to-red-50 scroll-mt-20"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-orange-100 rounded-full">
                    <Clock className="h-8 w-8 text-orange-600" />
                  </div>
                  <h2 className="text-4xl font-bold text-orange-800">¿Cuándo debe implementarse?</h2>
                </div>

                <div className="space-y-6">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    La sustentabilidad debe implementarse ahora, con visión a largo plazo y aprovechando ocasiones
                    estratégicas para su consolidación efectiva.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="border-orange-200 hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-orange-700 mb-2">Momento Actual</h4>
                        <p className="text-sm text-gray-600">Sin más demoras, acción inmediata</p>
                      </CardContent>
                    </Card>
                    <Card className="border-orange-200 hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-orange-700 mb-2">Visión Prolongada</h4>
                        <p className="text-sm text-gray-600">Impactos duraderos a largo plazo</p>
                      </CardContent>
                    </Card>
                    <Card className="border-orange-200 hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-orange-700 mb-2">Ocasiones Estratégicas</h4>
                        <p className="text-sm text-gray-600">Catalizadores internos y externos</p>
                      </CardContent>
                    </Card>
                    <Card className="border-orange-200 hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-orange-700 mb-2">Consolidación</h4>
                        <p className="text-sm text-gray-600">Integración efectiva sostenida</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Temporalidad de la sustentabilidad"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-4 rounded-full">
                  <Clock className="h-8 w-8" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Dónde Section */}
        <section
          id="donde"
          className="min-h-screen flex items-center justify-center py-24 px-6 bg-gradient-to-br from-teal-50 to-cyan-50 scroll-mt-20"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className="relative order-2 lg:order-1">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Espacios de aplicación"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-teal-500 text-white p-4 rounded-full">
                  <MapPin className="h-8 w-8" />
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-teal-100 rounded-full">
                    <MapPin className="h-8 w-8 text-teal-600" />
                  </div>
                  <h2 className="text-4xl font-bold text-teal-800">¿Dónde se aplica?</h2>
                </div>

                <div className="space-y-6">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    La sustentabilidad opera en múltiples niveles espaciales, desde sitios concretos hasta ubicaciones
                    con condiciones específicas.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="border-teal-200 hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-teal-700 mb-2">Sitio</h4>
                        <p className="text-sm text-gray-600">Espacios concretos de impacto</p>
                      </CardContent>
                    </Card>
                    <Card className="border-teal-200 hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-teal-700 mb-2">Lugar</h4>
                        <p className="text-sm text-gray-600">Dimensión cultural y simbólica</p>
                      </CardContent>
                    </Card>
                    <Card className="border-teal-200 hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-teal-700 mb-2">Ubicación</h4>
                        <p className="text-sm text-gray-600">Condiciones materiales y normativas</p>
                      </CardContent>
                    </Card>
                    <Card className="border-teal-200 hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-teal-700 mb-2">Estrategias</h4>
                        <p className="text-sm text-gray-600">Adaptadas al entorno específico</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cómo Section */}
        <section
          id="como"
          className="min-h-screen flex items-center justify-center py-24 px-6 bg-gradient-to-br from-indigo-50 to-purple-50 scroll-mt-20"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-indigo-100 rounded-full">
                    <Cog className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h2 className="text-4xl font-bold text-indigo-800">¿Cómo se gestiona?</h2>
                </div>

                <div className="space-y-6">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    La gestión sustentable requiere un enfoque integral que combine ética, estrategia, procesos
                    continuos y liderazgo cultural.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="border-indigo-200 hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-indigo-700 mb-2">Manera Ética</h4>
                        <p className="text-sm text-gray-600">Enfoque estratégico responsable</p>
                      </CardContent>
                    </Card>
                    <Card className="border-indigo-200 hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-indigo-700 mb-2">Método Estructurado</h4>
                        <p className="text-sm text-gray-600">Procesos organizados y continuos</p>
                      </CardContent>
                    </Card>
                    <Card className="border-indigo-200 hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-indigo-700 mb-2">Forma Contextual</h4>
                        <p className="text-sm text-gray-600">Adaptada a cada situación</p>
                      </CardContent>
                    </Card>
                    <Card className="border-indigo-200 hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-indigo-700 mb-2">Liderazgo Cultural</h4>
                        <p className="text-sm text-gray-600">Transformación organizacional</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Gestión de la sustentabilidad"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-indigo-500 text-white p-4 rounded-full">
                  <Cog className="h-8 w-8" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Con qué Section */}
        <section
          id="con-que"
          className="min-h-screen flex items-center justify-center py-24 px-6 bg-gradient-to-br from-rose-50 to-pink-50 scroll-mt-20"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className="relative order-2 lg:order-1">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Herramientas de gestión"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-rose-500 text-white p-4 rounded-full">
                  <Hammer className="h-8 w-8" />
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-rose-100 rounded-full">
                    <Hammer className="h-8 w-8 text-rose-600" />
                  </div>
                  <h2 className="text-4xl font-bold text-rose-800">¿Con qué se gestiona?</h2>
                </div>

                <div className="space-y-6">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    La gestión sustentable se apoya en diversos componentes que van desde marcos estratégicos hasta
                    herramientas operativas concretas.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="border-rose-200 hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-rose-700 mb-2">Instrumentos</h4>
                        <p className="text-sm text-gray-600">Marcos estratégicos y normativos</p>
                      </CardContent>
                    </Card>
                    <Card className="border-rose-200 hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-rose-700 mb-2">Recursos</h4>
                        <p className="text-sm text-gray-600">Elementos que hacen posible la acción</p>
                      </CardContent>
                    </Card>
                    <Card className="border-rose-200 hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-rose-700 mb-2">Herramientas</h4>
                        <p className="text-sm text-gray-600">Facilitan la operatividad técnica</p>
                      </CardContent>
                    </Card>
                    <Card className="border-rose-200 hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-rose-700 mb-2">Medios</h4>
                        <p className="text-sm text-gray-600">Canalizan las decisiones</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cuánto Section */}
        <section
          id="cuanto"
          className="min-h-screen flex items-center justify-center py-24 px-6 bg-gradient-to-br from-emerald-50 to-green-50 scroll-mt-20"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-emerald-100 rounded-full">
                    <DollarSign className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h2 className="text-4xl font-bold text-emerald-800">¿Cuánto cuesta implementarla?</h2>
                </div>

                <div className="space-y-6">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Los costos se estiman considerando recursos, esfuerzos, acciones y beneficios a largo plazo para
                    construir un presupuesto estratégico y realista.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-emerald-700 mb-2">Recursos</h4>
                        <p className="text-sm text-gray-600">Cantidad de recursos involucrados</p>
                      </CardContent>
                    </Card>
                    <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-emerald-700 mb-2">Magnitud</h4>
                        <p className="text-sm text-gray-600">Esfuerzos requeridos por etapa</p>
                      </CardContent>
                    </Card>
                    <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-emerald-700 mb-2">Acciones</h4>
                        <p className="text-sm text-gray-600">Número de elementos implicados</p>
                      </CardContent>
                    </Card>
                    <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-emerald-700 mb-2">ROI Sostenible</h4>
                        <p className="text-sm text-gray-600">Beneficios a largo plazo</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Costos de implementación"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-emerald-500 text-white p-4 rounded-full">
                  <DollarSign className="h-8 w-8" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 px-6 bg-gradient-to-r from-green-600 to-emerald-700">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                La sustentabilidad ya no es una elección estratégica…
              </h2>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Es una condición esencial para la continuidad y relevancia de toda organización en el siglo XXI
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 rounded-full"
                >
                  <a href="/TP1-Sustentabilidad.pdf" download className="flex items-center space-x-2">
                    <Download className="h-5 w-5" />
                    <span>Descargar Informe Completo</span>
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-700 px-8 py-3 rounded-full bg-transparent"
                >
                  <a href="#que-es" className="flex items-center space-x-2">
                    <ArrowRight className="h-5 w-5" />
                    <span>Explorar Más</span>
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Leaf className="h-8 w-8 text-green-400" />
                  <span className="font-bold text-xl">Green Software</span>
                </div>
                <p className="text-gray-400">
                  Promoviendo la sustentabilidad en el desarrollo de software y tecnología.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Navegación</h3>
                <ul className="space-y-2">
                  {navigationItems.slice(0, 5).map((item) => (
                    <li key={item.href}>
                      <a href={item.href} className="text-gray-400 hover:text-green-400 transition-colors">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Recursos</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/TP1-Sustentabilidad.pdf"
                      download
                      className="text-gray-400 hover:text-green-400 transition-colors"
                    >
                      Informe Completo
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                      Documentación
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                      Casos de Estudio
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Green Software. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
