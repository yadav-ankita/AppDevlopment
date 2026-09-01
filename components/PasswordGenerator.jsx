import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BouncyCheckbox from "react-native-bouncy-checkbox";

// Form validation
import * as Yup from 'yup'
import { Formik } from 'formik';
// YOUTUBE:
const PasswordSchema = Yup.object().shape({
    passwordLength: Yup.number()
        .min(4, 'Should be min of 4 characters')
        .max(16, 'Should be max of 16 characters')
        .required('Length is required')

})
export default function PasswordGenerator() {

    const [password, setPassword] = useState('')
    const [isPassGenerated, setIsPassGenerated] = useState(false)

    const [lowerCase, setLowerCase] = useState(true)
    const [upperCase, setupperCase] = useState(false)
    const [numbers, setNumbers] = useState(false)
    const [symbols, setSymbols] = useState(false)

    const generatePasswordString = (passwordLength) => {
        let characterList = '';

        const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const digitChars = '0123456789';
        const specialChars = '!@#$%^&*()_+';

        if (upperCase) {
            characterList += upperCaseChars
        }
        if (lowerCase) {
            characterList += lowerCaseChars
        }
        if (numbers) {
            characterList += digitChars
        }
        if (symbols) {
            characterList += specialChars
        }
        const passwordResult = createPassword(characterList, passwordLength)
        setPassword(passwordResult)
        setIsPassGenerated(true)
    }
    const createPassword = (characters, passwordLength) => {
        let result = ''
        for (let i = 0; i < passwordLength; i++) {
            const characterIndex = Math.round(Math.random() * characters.length)
            result += characters.charAt(characterIndex)
        }
        return result
    }
    const resetPasswordState = () => {
        setPassword('')
        setIsPassGenerated(false)
        setLowerCase(true)
        setupperCase(false)
        setNumbers(false)
        setSymbols(false)
    }
   return (
    <SafeAreaView style={styles.safeArea}>
        <ScrollView
            contentContainerStyle={styles.scrollContainer}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.formContainer}>

                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.title}>Password Generator</Text>
                    <Text style={styles.subtitle}>
                        Create a strong and secure password
                    </Text>
                </View>

                <Formik
                    initialValues={{ passwordLength: '' }}
                    validationSchema={PasswordSchema}
                    onSubmit={values => {
                        console.log(values);
                        generatePasswordString(+values.passwordLength)
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        isValid,
                        handleChange,
                        handleSubmit,
                        handleReset,
                    }) => (
                        <>
                            {/* Password Length */}
                            <View style={styles.lengthSection}>
                                <Text style={styles.sectionTitle}>
                                    Password Length
                                </Text>

                                <TextInput
                                    style={[
                                        styles.inputStyle,
                                        touched.passwordLength &&
                                        errors.passwordLength &&
                                        styles.inputError
                                    ]}
                                    value={values.passwordLength}
                                    onChangeText={handleChange('passwordLength')}
                                    placeholder="Enter length (4-16)"
                                    placeholderTextColor="#7C83A1"
                                    keyboardType="numeric"
                                    maxLength={2}
                                />

                                {touched.passwordLength &&
                                    errors.passwordLength && (
                                        <Text style={styles.errorText}>
                                            {errors.passwordLength}
                                        </Text>
                                    )}
                            </View>

                            {/* Character Options */}
                            <View style={styles.optionsContainer}>
                                <Text style={styles.sectionTitle}>
                                    Character Options
                                </Text>

                                {/* Lowercase */}
                                <View style={styles.optionRow}>
                                    <View>
                                        <Text style={styles.optionTitle}>
                                            Lowercase Letters
                                        </Text>
                                        <Text style={styles.optionDescription}>
                                            a, b, c, d...
                                        </Text>
                                    </View>

                                    <BouncyCheckbox
                                       style={styles.checkbox}
                                        disableBuiltInState
                                        isChecked={lowerCase}
                                        onPress={() => setLowerCase(!lowerCase)}
                                        fillColor="#6C63FF"
                                        size={25}
                                       
                                    />
                                </View>

                                {/* Uppercase */}
                                <View style={styles.optionRow}>
                                    <View>
                                        <Text style={styles.optionTitle}>
                                            Uppercase Letters
                                        </Text>
                                        <Text style={styles.optionDescription}>
                                            A, B, C, D...
                                        </Text>
                                    </View>

                                    <BouncyCheckbox
                                        style={styles.checkbox}
                                        disableBuiltInState
                                        isChecked={upperCase}
                                        onPress={() => setupperCase(!upperCase)}
                                        fillColor="#6C63FF"
                                        size={25}
                                    />
                                </View>

                                {/* Numbers */}
                                <View style={styles.optionRow}>
                                    <View>
                                        <Text style={styles.optionTitle}>
                                            Numbers
                                        </Text>
                                        <Text style={styles.optionDescription}>
                                            0, 1, 2, 3...
                                        </Text>
                                    </View>

                                    <BouncyCheckbox
                                        disableBuiltInState
                                         style={styles.checkbox}
                                        isChecked={numbers}
                                        onPress={() => setNumbers(!numbers)}
                                        fillColor="#6C63FF"
                                        size={25}
                                    />
                                </View>

                                {/* Symbols */}
                                <View style={styles.optionRow}>
                                    <View>
                                        <Text style={styles.optionTitle}>
                                            Symbols
                                        </Text>
                                        <Text style={styles.optionDescription}>
                                            !, @, #, $, %...
                                        </Text>
                                    </View>

                                    <BouncyCheckbox
                                        disableBuiltInState
                                         style={styles.checkbox}
                                        isChecked={symbols}
                                        onPress={() => setSymbols(!symbols)}
                                        fillColor="#6C63FF"
                                        size={25}
                                    />
                                </View>
                            </View>

                            {/* Buttons */}
                            <View style={styles.formActions}>

                                <TouchableOpacity
                                    disabled={!isValid}
                                    style={[
                                        styles.primaryBtn,
                                        !isValid && styles.disabledBtn
                                    ]}
                                    onPress={handleSubmit}
                                    activeOpacity={0.8}
                                >
                                    <Text style={styles.primaryBtnTxt}>
                                        Generate Password
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.secondaryBtn}
                                    onPress={() => {
                                        handleReset();
                                        resetPasswordState()
                                    }}
                                    activeOpacity={0.8}
                                >
                                    <Text style={styles.secondaryBtnTxt}>
                                        Reset
                                    </Text>
                                </TouchableOpacity>

                            </View>
                        </>
                    )}
                </Formik>
            </View>

            {/* Generated Password */}
            {isPassGenerated ? (
                <View style={styles.passwordCard}>

                    <View style={styles.resultHeader}>
                        <Text style={styles.resultTitle}>
                            Your Password
                        </Text>

                        <Text style={styles.copyText}>
                            Long press to copy
                        </Text>
                    </View>

                    <View style={styles.passwordBox}>
                        <Text
                            selectable={true}
                            style={styles.generatedPassword}
                        >
                            {password}
                        </Text>
                    </View>

                </View>
            ) : null}

        </ScrollView>
    </SafeAreaView>
)
}
const styles = StyleSheet.create({
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 4,
        flex:1,
        flexDirection:'column',
        borderColor: '#303250',
    },
    safeArea: {
        flex: 1,
        backgroundColor: '#0F1020',
    },

    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 30,
        paddingHorizontal: 18,
    },

    /* Main Card */
    formContainer: {
        width: '100%',
        maxWidth: 420,
        backgroundColor: '#1A1B2E',
        borderRadius: 24,
        padding: 24,

        elevation: 8,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.35,
        shadowRadius: 10,
    },

    /* Header */

    header: {
        alignItems: 'center',
        marginBottom: 28,
    },

    title: {
        fontSize: 28,
        fontWeight: '800',
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 8,
    },

    subtitle: {
        fontSize: 14,
        color: '#9FA4C4',
        textAlign: 'center',
    },

    /* Password Length */

    lengthSection: {
        marginBottom: 24,
    },

    sectionTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#FFFFFF',
        marginBottom: 10,
    },

    inputStyle: {
        width: '100%',
        height: 52,

        backgroundColor: '#252640',

        borderWidth: 1,
        borderColor: '#383A5A',

        borderRadius: 12,

        paddingHorizontal: 16,

        color: '#FFFFFF',
        fontSize: 16,

        textAlign: 'center',
    },

    inputError: {
        borderColor: '#FF5C7A',
    },

    errorText: {
        fontSize: 12,
        color: '#FF6B81',
        marginTop: 6,
        marginLeft: 4,
    },

    /* Character Options */

    optionsContainer: {
        marginBottom: 26,
    },
optionRow: {
    minHeight: 62,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',

    backgroundColor: '#252640',
    borderRadius: 14,

    paddingLeft: 16,
    paddingRight: 8,

    marginBottom: 10,

    borderWidth: 1,
    borderColor: '#303250',
},

    optionTitle: {
        fontSize: 15,
        fontWeight: '600',
        color: '#FFFFFF',
        marginBottom: 3,
    },

    optionDescription: {
        fontSize: 12,
        color: '#858BAA',
    },

    /* Buttons */

    formActions: {
        gap: 12,
    },

    primaryBtn: {
        width: '100%',
        height: 52,

        borderRadius: 14,

        backgroundColor: '#8787f9',

        justifyContent: 'center',
        alignItems: 'center',

        elevation: 4,

        shadowColor: '#6C63FF',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
    },

    disabledBtn: {
        backgroundColor: '#45465F',
        elevation: 0,
    },

    primaryBtnTxt: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '700',
    },

    secondaryBtn: {
        width: '100%',
        height: 48,

        borderRadius: 14,

        backgroundColor: '#5151ca',

        justifyContent: 'center',
        alignItems: 'center',

        borderWidth: 1,
        borderColor: '#383A5A',
    },

    secondaryBtnTxt: {
        color: '#B8BBDD',
        fontSize: 15,
        fontWeight: '600',
    },
    /* Generated Password Card */
    passwordCard: {
        width: '100%',
        maxWidth: 420,
        marginTop: 18,
        backgroundColor: '#1A1B2E',
        borderRadius: 20,
        padding: 20,
        borderWidth: 1,
        borderColor: '#31346b',
    },
    resultHeader: {
        marginBottom: 14,
    },
    resultTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#FFFFFF',
        marginBottom: 4,
    },
    copyText: {
        fontSize: 12,
        color: '#7C83A1',
    },
    passwordBox: {
        backgroundColor: '#252640',
        borderRadius: 14,
        paddingVertical: 18,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: '#383A5A',
    },
    generatedPassword: {
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        color: '#8F88FF',
        letterSpacing: 1,
        marginBottom: 2,
    },
});